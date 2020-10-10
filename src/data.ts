export interface GhostEvidence {
  box: boolean;
  fingerprints: boolean;
  writing: boolean;
  orbs: boolean;
  emf: boolean;
  freezing: boolean;
}

export interface Ghost {
  name: string;
  evidence: GhostEvidence;
}

export const GHOSTS: Array<Ghost> = [
  {
    name: "Spirit",
    evidence: {
      box: true,
      fingerprints: true,
      writing: true,
      orbs: false,
      emf: false,
      freezing: false,
    },
  },
  {
    name: "Wraith",
    evidence: {
      box: true,
      fingerprints: true,
      writing: false,
      orbs: false,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Phantom",
    evidence: {
      box: false,
      fingerprints: false,
      writing: false,
      orbs: true,
      emf: true,
      freezing: true,
    },
  },
  {
    name: "Poltergeist",
    evidence: {
      box: true,
      fingerprints: true,
      writing: false,
      orbs: true,
      emf: false,
      freezing: false,
    },
  },
  {
    name: "Banshee",
    evidence: {
      box: false,
      fingerprints: true,
      writing: false,
      orbs: false,
      emf: true,
      freezing: true,
    },
  },
  {
    name: "Jinn",
    evidence: {
      box: true,
      fingerprints: false,
      writing: false,
      orbs: true,
      emf: true,
      freezing: false,
    },
  },
  {
    name: "Mare",
    evidence: {
      box: true,
      fingerprints: false,
      writing: false,
      orbs: true,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Revenant",
    evidence: {
      box: false,
      fingerprints: true,
      writing: true,
      orbs: false,
      emf: true,
      freezing: false,
    },
  },
  {
    name: "Shade",
    evidence: {
      box: false,
      fingerprints: false,
      writing: true,
      orbs: true,
      emf: true,
      freezing: false,
    },
  },
  {
    name: "Demon",
    evidence: {
      box: true,
      fingerprints: false,
      writing: true,
      orbs: false,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Yurei",
    evidence: {
      box: false,
      fingerprints: false,
      writing: true,
      orbs: true,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Oni",
    evidence: {
      box: true,
      fingerprints: false,
      writing: true,
      orbs: false,
      emf: true,
      freezing: false,
    },
  },
];
