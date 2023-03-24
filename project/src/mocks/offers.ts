import {Offer, City} from '../types/offer';

export const CITY: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
};

export const offers: Offer[] = [
  {
    id: 1,
    previewImage: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg',
      'img/apartment-small-04.jpg', 'img/room.jpg',
      'img/studio-01.jpg'],
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    rating: 4.5,
    type: 'Hotel',
    rooms: 3,
    maxAdults: 3,
    price: 140,
    options: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV'],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
  },
  {
    id: 2,
    previewImage: ['img/apartment-01.jpg', 'img/apartment-03.jpg',
      'img/apartment-small-03.jpg', 'img/apartment-small-04.jpg', 'img/room.jpg', 'img/room-small.jpg',],
    isPremium: true,
    title: 'Beautiful luxurious apartment at great location',
    rating: 5,
    type: 'Apartment',
    rooms: 4,
    maxAdults: 4,
    price: 180,
    options: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Nina',
      status: false,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
  },
  {
    id: 3,
    previewImage: ['img/apartment-02.jpg', 'img/apartment-03.jpg',
      'img/apartment-small-03.jpg', 'img/apartment-small-04.jpg','img/room-small.jpg',
      'img/studio-01.jpg'],
    isPremium: false,
    title: 'Wood and stone place',
    rating: 3.5,
    type: 'Private room',
    rooms: 1,
    maxAdults: 1,
    price: 80,
    options: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating',
      'Baby seat', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatar: 'img/avatar-max.jpg',
      name: 'Igor',
      status: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
  },
  {
    id: 4,
    previewImage: ['img/apartment-01.jpg', 'img/apartment-small-04.jpg', 'img/room.jpg',
      'img/room-small.jpg', 'img/studio-01.jpg', 'img/studio-photos.jpg'],
    isPremium: true,
    title: 'Wood and stone place',
    rating: 4,
    type: 'Private room',
    rooms: 1,
    maxAdults: 2,
    price:100,
    options: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Dishwasher', 'Cabel TV',],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Elena',
      status: true,
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
  },
];
