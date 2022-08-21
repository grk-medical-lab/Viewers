import DICOMSRDisplayTool from './DICOMSRDisplayTool';
import SRLengthTool from './tools/SRLength';
import SRBidirectional from './tools/SRBidirectional';
import SREllipticalROI from './tools/SREllipticalROI';
import SRArrowAnnotate from './tools/SRArrowAnnotate';
import SRPlanarFreehandROI from './tools/SRPlanarFreehandROI';
import SRRectangleROI from './tools/SRRectangleROI';

const toolNames = {
  DICOMSRDisplay: DICOMSRDisplayTool.toolName,
  SRLength: SRLengthTool.toolName,
  SRBidirectional: SRBidirectional.toolName,
  SREllipticalROI: SREllipticalROI.toolName,
  SRArrowAnnotate: SRArrowAnnotate.toolName,
  SRPlanarFreehandROI: SRPlanarFreehandROI.toolName,
  SRRectangleROI: SRRectangleROI.toolName,
};

export default toolNames;
