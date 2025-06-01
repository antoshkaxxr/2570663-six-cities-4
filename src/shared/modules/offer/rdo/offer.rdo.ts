import { Amenity, CityName, Coordinates, PlaceType } from '../../../types/index.js';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { Expose, Type } from 'class-transformer';

export class OfferRdo {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: CityName;

  @Expose()
  public previewImage!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public isFavorite!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: PlaceType;

  @Expose()
  public rooms!: number;

  @Expose()
  public guests!: number;

  @Expose()
  public price!: number;

  @Expose()
  public amenities!: Amenity[];

  @Expose()
  @Type(() => UserRdo)
  public author!: UserRdo;

  @Expose()
  public commentsCount!: number;

  @Expose()
  public coordinates!: Coordinates;
}
