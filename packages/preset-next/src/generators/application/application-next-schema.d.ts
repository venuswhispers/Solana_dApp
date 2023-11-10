/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ApplicationNextSchema {
  /**
   * Name of the application
   */
  name: string;
  /**
   * Name of the web application (overrides name)
   */
  webName?: string;
  /**
   * Port to run the application on
   */
  port?: number;
  /**
   * Skip formatting files
   */
  skipFormat?: boolean;
  /**
   * The UI library to use
   */
  ui?: "none" | "tailwind";
  /**
   * Anchor template to use
   */
  anchor?: "none" | "counter" | "hello-world";
  /**
   * Anchor project name
   */
  anchorName?: string;
}
