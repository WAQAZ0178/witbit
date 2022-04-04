import images from '../services/images';

export const CONSTANTS = {
  // ['Home Improvement', 'Automotive', 'Landscaping ','Hobbies']
  main_categories: [
    {
      id: 1,
      name: 'Home Improvement',
    },
    {
      id: 2,
      name: 'Automotive',
    },
    {
      id: 3,
      name: 'Landscaping',
    },
    {
      id: 4,
      name: 'Hobbies',
    },
  ],
  sub_categories: [
    {
      id: 1,
      parent_id: 1,
      name: 'Aggregators',
      image: images.landscaping,
    },
    {
      id: 2,
      parent_id: 1,
      name: 'Saving energy',
      image: images.landscaping,
    },
    {
      id: 3,
      parent_id: 2,
      name: 'SEDAN',
      image: images.landscaping,
    },
    {
      id: 4,
      parent_id: 2,
      name: 'SPORTS CAR',
      image: images.landscaping,
    },
    {
      id: 5,
      parent_id: 3,
      name: 'Flowering trees',
      image: images.landscaping,
    },
    {
      id: 6,
      parent_id: 3,
      name: 'Lawns',
      image: images.landscaping,
    },
    {
      id: 7,
      parent_id: 4,
      name: 'Outdoor recreation',
      image: images.hobbies,
    },
    {
      id: 8,
      parent_id: 4,
      name: 'Creative Hobbies',
      image: images.hobbies,
    },
    {
      id: 9,
      parent_id: 4,
      name: 'Social Activities',
      image: images.hobbies,
    },
  ],
};
