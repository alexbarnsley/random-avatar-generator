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
  generateRandomAvatar(seed?: string, avatarStyle: 'Circle' | 'Transparent' = 'Circle'): string {
    const rng = seed ? seedrandom(seed) : seedrandom();

    const urlOptions = {
      accessoriesType: this.getRandomOption(rng, this.options.accessoriesTypeOptions),
      avatarStyle,
      clotheColor: this.getRandomOption(rng, this.options.clotheColorOptions),
      clotheType: this.getRandomOption(rng, this.options.clotheTypeOptions),
      eyeType: this.getRandomOption(rng, this.options.eyeTypeOptions),
      eyebrowType: this.getRandomOption(rng, this.options.eyebrowTypeOptions),
      facialHairColor: this.getRandomOption(rng, this.options.facialHairColorOptions),
      facialHairType: this.getRandomOption(rng, this.options.facialHairTypeOptions),
      hairColor: this.getRandomOption(rng, this.options.hairColorTypes),
      hatColor: this.getRandomOption(rng, this.options.hatColorOptions),
      mouthType: this.getRandomOption(rng, this.options.mouthTypeOptions),
      skinColor: this.getRandomOption(rng, this.options.skinColorOptions),
      topType: this.getRandomOption(rng, this.options.topTypeOptions),
    }

    return `https://avataaars.io/?${new URLSearchParams(urlOptions)}`;
  }

  getRandomOption(rng: seedrandom.prng, options: string[]): string {
    return options[Math.floor(rng() * options.length)];
  }
}
