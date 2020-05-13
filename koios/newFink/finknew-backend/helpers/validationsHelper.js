/**
 * Validation Helper module
 * @module ValidationHelper
 */

const Joi = require('@hapi/joi');
const { options } = require('../config/config');
const Promise = require('bluebird');

const optionsParams = {
  titleRegex: /^[a-zA-Z0-9 :]{4,}$/,
  usernameRegex: /^[a-zA-Z0-9-_]{4,}$/,
  nameRegex: /^(([a-zA-Z])+([-\ \.])?([a-zA-Z])+)+$/,
  passwordRegex: /^(?=.*[0-9])(?=.*[a-z]).{6,}$/,
  addressRegex: /^[a-zA-Z0-9-_\s'.]{8,}$/,
  phoneRegex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
};

// POST /api/user/register
const registerUser = body => {
  const schema = Joi.object({
    username: Joi.string()
      .regex(optionsParams.usernameRegex)
      .min(4)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .regex(optionsParams.passwordRegex)
      .min(6)
      .required(),
    passwordConfirm: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .strict()
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

// POST /api/user/login
const loginUser = body => {
  const schema = Joi.object({
    usermail: body.usermail
      ? body.usermail.includes('@')
        ? Joi.string()
            .email({ minDomainSegments: 2 })
            .required()
        : Joi.string()
            .regex(optionsParams.usernameRegex)
            .min(4)
            .required()
      : Joi.string().required(),
    password: Joi.string()
      .regex(optionsParams.passwordRegex)
      .min(6)
      .required()
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

// POST /api/user/edit-informations
const editInformations = body => {
  const schema = Joi.object({
    username: Joi.string()
      .regex(optionsParams.usernameRegex)
      .min(4)
      .optional()
      .allow(''),
    lastName: Joi.string()
      .regex(optionsParams.nameRegex)
      .min(3)
      .optional()
      .allow(''),
    firstName: Joi.string()
      .regex(optionsParams.nameRegex)
      .min(3)
      .optional()
      .allow(''),
    birthday: Joi.date()
      .iso()
      .optional()
      .allow(''),
    sexe: Joi.string()
      .allow('homme', 'femme')
      .optional()
      .allow(''),
    adresse: Joi.string()
      .regex(optionsParams.addressRegex)
      .optional()
      .allow(''),
    ville: Joi.string()
      .optional()
      .allow(''),
    phone: Joi.string()
      .regex(optionsParams.phoneRegex)
      .optional()
      .allow('')
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

// POST /api/city/add
const addCity = body => {
  const schema = Joi.object({
    name: Joi.string()
      .regex(optionsParams.nameRegex)
      .min(3)
      .required()
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

// POST /api/category/add
const addCategory = body => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required()
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

// POST /api/company/add
const addCompany = body => {
  const schema = Joi.object({
    title: Joi.string()
      .regex(optionsParams.titleRegex)
      .min(4)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    phone: Joi.string()
      .regex(optionsParams.phoneRegex)
      .required(),
    city: Joi.object().required(),
    address: Joi.string().required(),
    description: Joi.string()
      .min(100)
      .max(500)
      .required(),
    category: Joi.object().required(),
    website: Joi.string()
      .optional()
      .allow(''),
    facebook: Joi.string()
      .optional()
      .allow(''),
    twitter: Joi.string()
      .optional()
      .allow(''),
    linkedin: Joi.string()
      .optional()
      .allow(''),
    instagram: Joi.string()
      .optional()
      .allow(''),
    youtube: Joi.string()
      .optional()
      .allow(''),
    long: Joi.string()
      .optional()
      .allow(''),
    lat: Joi.string()
      .optional()
      .allow(''),
    urlMaps: Joi.string()
      .optional()
      .allow('')
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

// POST /api/user/update-info
const infoUpdate = body => {
  const schema = Joi.object({
    lastName: Joi.string()
      .regex(optionsParams.nameRegex)
      .min(3)
      .required(),
    firstName: Joi.string()
      .regex(optionsParams.nameRegex)
      .min(3)
      .required(),
    phone: Joi.string()
      .regex(optionsParams.phoneRegex)
      .required()
  });

  return new Promise((resolve, reject) => {
    const { error } = schema.validate(body, options);
    if (error) reject(error);
    resolve(true);
  });
};

module.exports = {
  registerUser,
  loginUser,
  editInformations,
  addCity,
  addCategory,
  addCompany,
  infoUpdate
};
