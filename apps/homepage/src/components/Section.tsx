import { View } from '@react-pdf/renderer';

export const Section = (children: any) => {
  return <View style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 8 }}>{children}</View>;
};
