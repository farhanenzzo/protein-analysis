import { ProteinData, Protein } from '../types/protein';

function parseSequenceDescription(seqDesc: string) {
  const proteinId = seqDesc.split(' ')[0] || '';
  const length = seqDesc.match(/length: (\d+)/)?.[1] || '';
  const kD = seqDesc.match(/kD: ([\d.]+)/)?.[1] || '';
  const transcripts = seqDesc.match(/transcripts: ([^,]+)/)?.[1] || '';
  const strands = seqDesc.match(/strands: ([^,]+)/)?.[1] || '';
  const genes = seqDesc.match(/genes: ([^,]+)/)?.[1] || '';

  return {
    proteinId,
    length: `${length} bp`,
    molecularWeight: `${parseFloat(kD).toFixed(2)} kD`,
    strands,
    transcriptIds: transcripts,
    genes
  };
}

export function mapProteinData(data: ProteinData): Protein {
  const seqInfo = parseSequenceDescription(data.seq_desc);

  return {
    id: data._id.$oid,
    name: `${data.hgene_name} → ${data.tgene_name}`,
    hostGeneName: data.hgene_name,
    targetGeneName: data.tgene_name,
    hostJunction: data.hgene_junction,
    targetJunction: data.tgene_junction,
    sequenceDescription: data.seq_desc,
    hostSequence: data.hgene_seq,
    targetSequence: data.tgene_seq,
    frameStatus: data.isOutOfFrame ? 'Out of Frame' : 'In Frame',
    analysisStatus: data.isAnalyzed ? 'Analyzed' : 'Not Analyzed',
    ...seqInfo
  };
}