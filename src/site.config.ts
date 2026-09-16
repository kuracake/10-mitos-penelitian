/*
 * Konfigurasi website
 */
export const site = {
  /** Nama website */
  name: '10 Mitos Penelitian',

  /** Judul utama website */
  title: '10 Mitos Penelitian di Bidang Komputasi',

  /** Template judul setiap halaman */
  titleTemplate: '%s — 10 Mitos Penelitian',

  /** Deskripsi website */
  description:
    'Website edukasi yang membahas 10 mitos penelitian di bidang komputasi serta dasar-dasar penelitian computing.',

  /** URL sementara untuk development */
  url: 'http://localhost:4321',

  /** Bahasa konten */
  locale: 'id-ID',

  /** Penulis */
  author: 'Habi',

  /** OGP image */
  defaultOgImage: undefined as string | undefined,

  /** Social media */
  social: {
    twitter: '',
    github: '',
  },

  /** Jumlah konten per halaman */
  postsPerPage: 6,
};

export type SiteConfig = typeof site;