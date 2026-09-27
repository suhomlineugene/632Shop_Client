export interface EngineOilDto {
  id: number;
  creationTime: string;
  creatorUserId: number;
  lastModificationTime: string;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  capacity: string;
  countryOfOrigin: string;
  coverImageUrl: string;
  viscosity: string;
}
