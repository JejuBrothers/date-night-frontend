import { useState } from 'react';
import Layout from '@/components/Layout';
import { getUser, addPartner } from '@/services/users';
import { parseCookies } from 'nookies';
import useTranslation from 'next-translate/useTranslation';

const Partnership = {
  NONE: 0,
  PENDING: 1,
  PARTNER: 2,
};

const Profile = ({ user }) => {
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState(user);
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const checkPartnerStatus = (user) => {
    if (user.partner) {
      return Partnership.PARTNER;
    } else if (!user.partner && user.requestedAt) {
      var now = new Date().getTime();
      var requestedAt = new Date(user.requestedAt).getTime();
      if (now - requestedAt <= 1800000) {
        return Partnership.PENDING; //Pending Status if request sent within 30 mins (1800000 milliseconds)
      }
    }
    return Partnership.NONE;
  };

  const handleUserSearch = async (event) => {
    event.preventDefault();
    setSearchResult(null);
    setNotFound(false);
    try {
      const userSession = JSON.parse(parseCookies().userSession);
      const searchData = await getUser(userSession.jwt, username.value);
      setSearchResult(searchData);
    } catch (e) {
      setNotFound(true);
    }
  };

  const handlePartnerRequest = async (event) => {
    try {
      const userSession = JSON.parse(parseCookies().userSession);
      const res = await addPartner(userSession.jwt, searchResult.username);
      if (res.partner_token) {
        const user = await getUser(userSession.jwt, userSession.username);
        setUserInfo(user);
        setSearchResult(null);
        setNotFound(false);
      } else {
        console.log('error');
      }
    } catch (e) {
      console.log('error');
    }
  };

  const ShowPartner = () => {
    if (checkPartnerStatus(userInfo) === Partnership.PARTNER) {
      return (
        <div className='w-2/3 py-5 space-y-4 bg-pink-100 rounded'>
          <p className='block font-bold text-2xl text-center text-pink-600 truncate'>
            {t('profile:partner_title')}
          </p>
          <img
            className='mx-auto h-40 w-40 rounded-full'
            src='https://pics.freeicons.io/uploads/icons/png/8025287921598811056-512.png'
          />
          <p className='px-12 text-xl text-center text-pink-600 truncate'>
            {userInfo.partner}
          </p>
        </div>
      );
    }
    return null;
  };

  const ShowPending = () => {
    if (checkPartnerStatus(userInfo) === Partnership.PENDING) {
      return (
        <div className='w-2/3 py-5 space-y-4 bg-pink-100 rounded'>
          <p className='block font-bold text-2xl text-center text-pink-600 truncate'>
            {t('profile:partner_title')}
          </p>
          <img
            className='mx-auto h-40 w-40 rounded-full'
            src='https://pics.freeicons.io/uploads/icons/png/12708857611552302414-512.png'
          />
          <p className='px-12 pt-5 text-xl text-center text-pink-600 truncate'>
            {t('profile:request_pending')}
          </p>
        </div>
      );
    }
    return null;
  };
  const ShowSearch = () => {
    if (checkPartnerStatus(userInfo) === Partnership.NONE) {
      return (
        <div className='w-2/3 py-5 space-y-4 bg-pink-100 rounded'>
          <p className='block font-bold text-2xl text-center text-pink-600 truncate'>
            {t('profile:partner_find')}
          </p>
          <form onSubmit={handleUserSearch}>
            <div className='flex flex-col space-y-4 pt-2 px-8 items-end rounded-md'>
              <input
                id='username'
                name='username'
                type='text'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder='Search by username'
              />
              <button
                type='submit'
                className='w-1/2 py-2 font-bold rounded-md text-gray-800 bg-pink-500 hover:bg-pink-700 truncate'>
                {t('profile:button_search')}
              </button>
            </div>
          </form>
          {searchResult && (
            <div className='flex flex-col px-8 pt-5'>
              <p className='block text-xl text-gray-600'>
                {t('profile:search_result')}
              </p>
              {checkPartnerStatus(searchResult) === Partnership.NONE && (
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='block text-xl text-pink-600'>
                    {searchResult.username} {t('profile:partner_none')}
                  </p>
                  {searchResult.username !== userInfo.username && (
                    <button
                      onClick={handlePartnerRequest}
                      className='w-1/3 py-2 font-bold rounded-md text-gray-800 bg-pink-500 hover:bg-pink-700 truncate'>
                      {t('profile:button_request')}
                    </button>
                  )}
                </div>
              )}
              {checkPartnerStatus(searchResult) === Partnership.PENDING && (
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='block text-xl text-pink-600'>
                    {searchResult.username} {t('profile:partner_pending')}
                  </p>
                </div>
              )}
              {checkPartnerStatus(searchResult) === Partnership.PARTNER && (
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='block text-xl text-pink-600'>
                    {searchResult.username} {t('profile:partner_exist')}
                  </p>
                </div>
              )}
            </div>
          )}
          {!searchResult && notFound && (
            <div className='px-8 pt-5'>
              <p className='block text-xl text-gray-600'>
                {t('profile:search_result')}
              </p>
              <p className='block pt-5 text-xl text-center text-pink-600'>
                {t('profile:search_not_found')}
              </p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Layout title={t('profile:title')}>
      <div className='flex flex-row justify-center space-x-10 py-16 px-8'>
        <div className='w-2/3 py-5 space-y-4 bg-pink-100 rounded'>
          <p className='block font-bold text-2xl text-center text-pink-600 truncate'>
            {t('profile:content_title')}
          </p>
          <img
            className='mx-auto h-40 w-40s'
            src='https://pics.freeicons.io/uploads/icons/png/20315248251598811063-512.png'
          />
          <p className='px-12 text-2xl text-center text-pink-600 truncate'>
            {userInfo.username}
            <br />
            {userInfo.email}
          </p>
        </div>
        <ShowPartner />
        <ShowPending />
        <ShowSearch />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  let userData = {};
  try {
    const userSession = JSON.parse(parseCookies(ctx).userSession);
    userData = await getUser(userSession.jwt, userSession.username);
    if (!userData.id) {
      return {
        redirect: {
          destination: '/guest',
          permanent: false,
        },
      };
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user: userData },
  };
}

export default Profile;
