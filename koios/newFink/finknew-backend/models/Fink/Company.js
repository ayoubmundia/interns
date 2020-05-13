const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  title: {
    type: String,
    es_indexed: true
  },
  description: {
    type: String,
    es_indexed: true
  },
  agree: {
    type: Boolean,
    default: false,
    es_indexed: true
  },
  avis: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    es_indexed: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  founder: {
    email: {
      type: String
    },
    fristname: {
      type: String
    },
    lastname: {
      type: String
    },
    phone: {
      type: String
    }
  },
  location: {
    address: {
      type: String
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
      es_indexed: true
    },
    lat: {
      type: Number
    },
    long: {
      type: Number
    },
    mapsUrl: {
      type: String
    }
  },
  logo: {
    type: String
  },
  premium: {
    type: Boolean,
    default: false,
    es_indexed: true
  },
  descriptionservice: {
    type: String,
    es_indexed: true
  },
  services: [
    {
      title: {
        type: String,
        es_indexed: true
      },
      image: {
        type: String
      },
      description: {
        type: String,
        es_indexed: true
      }
    }
  ],
  rating: {
    type: Number,
    default: 0
  },
  socialemedia: {
    facebook: {
      type: String
    },
    youtube: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  subCategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subCategory',
      es_indexed: true
    }
  ],
  website: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    es_indexed: true
  }
});

CompanySchema.plugin(mongoosastic);

module.exports = mongoose.model('Company', CompanySchema);
