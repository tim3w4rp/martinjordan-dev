import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReactLinkButton } from './ReactLinkButton';
import { Resume } from './Resume';

export const ResumeButton = () => (
  <PDFDownloadLink document={<Resume />} fileName="martin_jordan_resume.pdf">
    {({ url }) => url && <ReactLinkButton href={url}>Resume</ReactLinkButton>}
  </PDFDownloadLink>
);
