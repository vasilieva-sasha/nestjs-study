export class RoomModel {
  _id: string;
  title: string;
  description: string;
  capacity: number;
  characteristics: {
    [key: string]: string[];
  };
  photos: string[];
}
