export enum Column {
  box = "Spirit Box",
  fingerprints = "Fingerprints",
  writing = "Book writing",
  orbs = "Ghost Orbs",
  emf = "EMF 5",
  freezing = "Freezing",
}

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

export const ghostMatches = (
  ghost: Ghost,
  evidence: Array<string>
): boolean => {
  for (const e of evidence) {
    switch (e) {
      case "box": {
        if (!ghost.evidence.box) {
          return false;
        }
        break;
      }
      case "fingerprints": {
        if (!ghost.evidence.fingerprints) {
          return false;
        }
        break;
      }
      case "writing": {
        if (!ghost.evidence.writing) {
          return false;
        }
        break;
      }
      case "orbs": {
        if (!ghost.evidence.orbs) {
          return false;
        }
        break;
      }
      case "emf": {
        if (!ghost.evidence.emf) {
          return false;
        }
        break;
      }
      case "freezing": {
        if (!ghost.evidence.freezing) {
          return false;
        }
        break;
      }
    }
  }
  return true;
};
