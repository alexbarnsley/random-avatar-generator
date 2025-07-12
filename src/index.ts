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
    const urlOptions = {
      accessoriesType: this.getRandomOption(this.options.accessoriesTypeOptions, seed),
      avatarStyle,
      clotheColor: this.getRandomOption(this.options.clotheColorOptions, seed),
      clotheType: this.getRandomOption(this.options.clotheTypeOptions, seed),
      eyeType: this.getRandomOption(this.options.eyeTypeOptions, seed),
      eyebrowType: this.getRandomOption(this.options.eyebrowTypeOptions, seed),
      facialHairColor: this.getRandomOption(this.options.facialHairColorOptions, seed),
      facialHairType: this.getRandomOption(this.options.facialHairTypeOptions, seed),
      hairColor: this.getRandomOption(this.options.hairColorTypes, seed),
      hatColor: this.getRandomOption(this.options.hatColorOptions, seed),
      mouthType: this.getRandomOption(this.options.mouthTypeOptions, seed),
      skinColor: this.getRandomOption(this.options.skinColorOptions, seed),
      topType: this.getRandomOption(this.options.topTypeOptions, seed),
    }

    return `https://avataaars.io/?${new URLSearchParams(urlOptions)}`;
  }

  getRandomOption(options: string[], seed?: string): string {
    const rng = seed ? seedrandom(seed) : seedrandom();

    return options[Math.floor(rng() * options.length)];
  }
}
