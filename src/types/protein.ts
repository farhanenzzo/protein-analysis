export interface ProteinData {
  _id: {
    $oid: string;
  };
  hgene_name: string;
  hgene_junction: number;
  tgene_name: string;
  tgene_junction: number;
  seq_desc: string;
  hgene_seq: string;
  tgene_seq: string;
  isOutOfFrame: boolean;
  isAnalyzed: boolean;
}

export interface Protein {
  id: string;
  name: string;
  hostGeneName: string;
  targetGeneName: string;
  hostJunction: number;
  targetJunction: number;
  sequenceDescription: string;
  hostSequence: string;
  targetSequence: string;
  frameStatus: string;
  analysisStatus: string;
  // New properties from sequence description
  proteinId: string;
  length: string;
  molecularWeight: string;
  strands: string;
  transcriptIds: string;
  genes: string;
}