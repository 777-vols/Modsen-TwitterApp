import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';

const [
  bookmarksImg,
  exploreImg,
  homeImg,
  listsImg,
  messagesImg,
  moreImg,
  notificationImg,
  profileImg
] = allImages.leftMenu;

const { HOME, EXPLORE, NOTIFICATIONS, MESSAGES, BOOKMARKS, LISTS, PROFILE, MORE } = Urls;

export const config = {
  buttonName: 'Tweet',
  menuItems: [
    {
      name: 'Home',
      image: homeImg,
      path: HOME
    },
    {
      name: 'Explore',
      image: exploreImg,
      path: EXPLORE
    },
    {
      name: 'Notifications',
      image: notificationImg,
      path: NOTIFICATIONS
    },
    {
      name: 'Messages',
      image: messagesImg,
      path: MESSAGES
    },
    {
      name: 'Bookmarks',
      image: bookmarksImg,
      path: BOOKMARKS
    },
    {
      name: 'Lists',
      image: listsImg,
      path: LISTS
    },
    {
      name: 'Profile',
      image: profileImg,
      path: PROFILE
    },
    {
      name: 'More',
      image: moreImg,
      path: MORE
    }
  ]
};
