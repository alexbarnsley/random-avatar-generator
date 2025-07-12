import seedrandom from 'seedrandom';
import defaultOptions from "./options";
import { IGenerateOptions } from "./types";

/** @description Class to generate avatars  */
export class AvatarGenerator {
  options: Record<string, string[]>;

  constructor(options: IGenerateOptions = {}) {
    this.options = { ...defaultOptions, ...options };

    for (const [key, value] of Object.entries(this.options)) {
      if (Array.isArray(value) && value.length > 0) {
        this.options[key] = value;
      }
    }
  }

  /** @description Generates random avatar image URL
   * @returns Random avatar image URL
   */
  generateRandomAvatar(seed?: string) {
    const rng = seed ? seedrandom(seed) : seedrandom();

    return `https://avataaars.io/?accessoriesType=${
      this.options.accessoriesTypeOptions[
        Math.floor(rng() * this.options.accessoriesTypeOptions.length)
      ]
    }&avatarStyle=Circle&clotheColor=${
      this.options.clotheColorOptions[Math.floor(rng() * this.options.clotheColorOptions.length)]
    }&clotheType=${
      this.options.clotheTypeOptions[Math.floor(rng() * this.options.clotheTypeOptions.length)]
    }&eyeType=${
      this.options.eyeTypeOptions[Math.floor(rng() * this.options.eyeTypeOptions.length)]
    }&eyebrowType=${
      this.options.eyebrowTypeOptions[Math.floor(rng() * this.options.eyebrowTypeOptions.length)]
    }&facialHairColor=${
      this.options.facialHairColorOptions[
        Math.floor(rng() * this.options.facialHairColorOptions.length)
      ]
    }&facialHairType=${
      this.options.facialHairTypeOptions[
        Math.floor(rng() * this.options.facialHairTypeOptions.length)
      ]
    }&hairColor=${
      this.options.hairColorTypes[Math.floor(rng() * this.options.hairColorTypes.length)]
    }&hatColor=${
      this.options.hatColorOptions[Math.floor(rng() * this.options.hatColorOptions.length)]
    }&mouthType=${
      this.options.mouthTypeOptions[Math.floor(rng() * this.options.mouthTypeOptions.length)]
    }&skinColor=${
      this.options.skinColorOptions[Math.floor(rng() * this.options.skinColorOptions.length)]
    }&topType=${
      this.options.topTypeOptions[Math.floor(rng() * this.options.topTypeOptions.length)]
    }`;
  }
}
