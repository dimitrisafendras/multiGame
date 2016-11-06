import Images from './images';

//
// The content of the component
//
export const content = {
  means: [
    {
      id: 'tube',
      title: 'tube',
      subtitle: 'holargos station',
      Img: Images.Tube,
      ImgActive: Images.TubeActive,
      content:
        `Tube: Blue line, Cholargos station.
        15 minutes on foot from Cholargos station.`,
    },
    {
      id: 'bus',
      title: 'bus',
      subtitle: 'bus station',
      Img: Images.Bus,
      ImgActive: Images.BusActive,
      content:
        `Trolley: number 10 or 18, Marouda Station, right in front
         Agile Actors entrance.
         Bus: number 550 or A7, College Station on Kifisias avenue.
         5 minutes walk from College Station.`,
    },
    {
      id: 'taxi',
      title: 'taxi',
      subtitle: 'find taxi',
      Img: Images.Taxi,
      ImgActive: Images.TaxiActive,
      content:
        `Taxi: in Athens taxis are easy to hire and modestly priced.`,
    },
  ],
};
