export const IP = 'http://18.219.185.9:3000';
// export const IP='http://192.168.100.3:3000';
export const URLS = {
  //    base_url:'http://192.168.100.3:3000/api/',
  base_url: `${IP}/api/`,
  image_url: `${IP}/`,
  auth: {
    sigin: 'oauth/token',
    register: 'oauth/register',
    refresh_token: 'oauth/refreshToken',
    get_otp: 'oauth/getOtpByEmail',
  },
  user: {
    user_profile: 'user/',
    users: 'user/users',
    update_info: 'user/update_info',
    update_password: 'user/update_password',
  },
  post: {
    posts: 'post/posts/',
    forum_posts: 'post/forum_posts',
    create: 'post/create',
  },
  comment: {
    comments: 'comment/comments/',
    create: 'comment/create',
  },
  like_dislike: 'like/like-dislike/', ///like-dislike/:user_id/:post_id'
  group: {
    create: 'group/create',
    get_joined_groups: 'group/get_joined_groups/',
    get_un_joined_groups: 'group/get_un_joined_groups/',
    join: 'group/join/',
    leave: 'group/leave/',
  },
  chat: {
    chat_list: 'message/chats/',
    conversation: 'message/',
    create: 'message/create',
    delete: 'message/delete/',
    update: 'message/updateMessage',
  },
  notifications: {
    receive: 'notification/',
    send: 'notification/create',
    get_post_notification: 'notification/post_notification',
  },
};
