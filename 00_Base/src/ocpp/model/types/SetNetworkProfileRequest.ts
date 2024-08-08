// Copyright 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {
  APNAuthenticationEnumType,
  OCPPInterfaceEnumType,
  OCPPTransportEnumType,
  OCPPVersionEnumType,
  VPNEnumType,
} from '../enums';
import { OcppRequest } from '../../..';

export interface SetNetworkProfileRequest extends OcppRequest {
  customData?: CustomDataType | null;
  /**
   * Slot in which the configuration should be stored.
   *
   */
  configurationSlot: number;
  connectionData: NetworkConnectionProfileType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
/**
 * Communication_ Function
 * urn:x-oca:ocpp:uid:2:233304
 * The NetworkConnectionProfile defines the functional and technical parameters of a communication link.
 *
 */
export interface NetworkConnectionProfileType {
  customData?: CustomDataType | null;
  apn?: APNType | null;
  ocppVersion: OCPPVersionEnumType;
  ocppTransport: OCPPTransportEnumType;
  /**
   * Communication_ Function. OCPP_ Central_ System_ URL. URI
   * urn:x-oca:ocpp:uid:1:569357
   * URL of the CSMS(s) that this Charging Station  communicates with.
   *
   */
  ocppCsmsUrl: string;
  /**
   * Duration in seconds before a message send by the Charging Station via this network connection times-out.
   * The best setting depends on the underlying network and response times of the CSMS.
   * If you are looking for a some guideline: use 30 seconds as a starting point.
   *
   */
  messageTimeout: number;
  /**
   * This field specifies the security profile used when connecting to the CSMS with this NetworkConnectionProfile.
   *
   */
  securityProfile: number;
  ocppInterface: OCPPInterfaceEnumType;
  vpn?: VPNType | null;
}
/**
 * APN
 * urn:x-oca:ocpp:uid:2:233134
 * Collection of configuration data needed to make a data-connection over a cellular network.
 *
 * NOTE: When asking a GSM modem to dial in, it is possible to specify which mobile operator should be used. This can be done with the mobile country code (MCC) in combination with a mobile network code (MNC). Example: If your preferred network is Vodafone Netherlands, the MCC=204 and the MNC=04 which means the key PreferredNetwork = 20404 Some modems allows to specify a preferred network, which means, if this network is not available, a different network is used. If you specify UseOnlyPreferredNetwork and this network is not available, the modem will not dial in.
 *
 */
export interface APNType {
  customData?: CustomDataType | null;
  /**
   * APN. APN. URI
   * urn:x-oca:ocpp:uid:1:568814
   * The Access Point Name as an URL.
   *
   */
  apn: string;
  /**
   * APN. APN. User_ Name
   * urn:x-oca:ocpp:uid:1:568818
   * APN username.
   *
   */
  apnUserName?: string | null;
  /**
   * APN. APN. Password
   * urn:x-oca:ocpp:uid:1:568819
   * APN Password.
   *
   */
  apnPassword?: string | null;
  /**
   * APN. SIMPIN. PIN_ Code
   * urn:x-oca:ocpp:uid:1:568821
   * SIM card pin code.
   *
   */
  simPin?: number | null;
  /**
   * APN. Preferred_ Network. Mobile_ Network_ ID
   * urn:x-oca:ocpp:uid:1:568822
   * Preferred network, written as MCC and MNC concatenated. See note.
   *
   */
  preferredNetwork?: string | null;
  /**
   * APN. Use_ Only_ Preferred_ Network. Indicator
   * urn:x-oca:ocpp:uid:1:568824
   * Default: false. Use only the preferred Network, do
   * not dial in when not available. See Note.
   *
   */
  useOnlyPreferredNetwork?: boolean | null;
  apnAuthentication: APNAuthenticationEnumType;
}
/**
 * VPN
 * urn:x-oca:ocpp:uid:2:233268
 * VPN Configuration settings
 *
 */
export interface VPNType {
  customData?: CustomDataType | null;
  /**
   * VPN. Server. URI
   * urn:x-oca:ocpp:uid:1:569272
   * VPN Server Address
   *
   */
  server: string;
  /**
   * VPN. User. User_ Name
   * urn:x-oca:ocpp:uid:1:569273
   * VPN User
   *
   */
  user: string;
  /**
   * VPN. Group. Group_ Name
   * urn:x-oca:ocpp:uid:1:569274
   * VPN group.
   *
   */
  group?: string | null;
  /**
   * VPN. Password. Password
   * urn:x-oca:ocpp:uid:1:569275
   * VPN Password.
   *
   */
  password: string;
  /**
   * VPN. Key. VPN_ Key
   * urn:x-oca:ocpp:uid:1:569276
   * VPN shared secret.
   *
   */
  key: string;
  type: VPNEnumType;
}
