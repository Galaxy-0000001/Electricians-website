// Registry of every business profile in this project.
// To add a new client: create src/config/<client>.js (copy an existing one),
// import it here and add it to the object below.

import electrician from './electrician.js';
import plumber from './plumber.js';
import cleaning from './cleaning.js';

const profiles = {
  electrician,
  plumber,
  cleaning,
};

export default profiles;
