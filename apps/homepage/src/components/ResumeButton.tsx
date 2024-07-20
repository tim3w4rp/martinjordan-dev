import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReactLinkButton } from './ReactLinkButton';
import { Resume } from './Resume';

export const ResumeButton = ({ children }: { children: React.ReactNode }) => (
  <PDFDownloadLink document={<Resume />} fileName="martin_jordan_resume.pdf">
    {({ url }) => url && <ReactLinkButton href={url}>{children}</ReactLinkButton>}
  </PDFDownloadLink>
);
