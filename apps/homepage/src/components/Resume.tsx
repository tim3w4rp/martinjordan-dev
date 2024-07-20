import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from '@react-pdf/renderer';
import { Divider } from './Divider';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: '/Roboto-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/Roboto-Bold.ttf',
      fontWeight: 700,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
  },
  subtitle: {
    fontWeight: 700,
    fontSize: 16,
  },
  position: {
    fontWeight: 700,
  },
  date: {
    color: 'grey',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 8,
  },
  header: { display: 'flex', flexDirection: 'row', gap: 8 },
});

// Create Document Component
// @ts-expect-error We need to pass props in order for the url to be present
export const Resume = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{}}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
          <View>
            <Image style={{ width: 120, height: 120 }} src="/M.jpg" />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 4 }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text style={styles.title}>Martin Jordán</Text>
              <Text>Frontend Engineer</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>Brno, Czech Republic</Text>
              <Text>+420 739 700 440</Text>
              <Text>
                Github:{' '}
                <Link style={{ color: 'grey' }} src="https://github.com/tim3w4rp">
                  tim3w4rp
                </Link>
              </Text>
              <Text>
                Web:{' '}
                <Link style={{ color: 'grey' }} src="https://martinjordan.dev">
                  martinjordan.dev
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.title}>Profile</Text>
        <Divider />
        <Text style={styles.section}>
          Frontend engineer with 5+ years of experience building web applications in entertainment, bookings and design
          systems management. Proactive communicator focused on clarity and visibility throughout the development
          lifecycle.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Key skills</Text>
        <Divider />
        <View style={styles.section}>
          <Text>React, Next.js, TypeScript, REST, GraphQL</Text>
          <Text>Fluent in English, passive German</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Experience</Text>
        <Divider />
        <View style={styles.section}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View
              style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Text style={styles.subtitle}>Supernova.io</Text>
              <Text style={styles.date}>April 2023 - May 2024</Text>
            </View>
            <Text>Senior Frontend Engineer</Text>
            <Text>• Product engineering and design system implementation</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View
              style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Text style={styles.subtitle}>Reservio</Text>
              <Text style={styles.date}>November 2021 - March 2023</Text>
            </View>
            <Text>Frontend Developer</Text>
            <Text>• Feature development and design system maintenance</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={styles.subtitle}>24i</Text>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>Scrum Master</Text>
                  <Text style={styles.date}>February 2021 - October 2021</Text>
                </View>
                <Text>• Cross-functional teams organization</Text>
              </View>
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text>Frontend Developer</Text>
                  <Text style={styles.date}>November 2018 - February 2021</Text>
                </View>
                <Text>• Smart TV app features development</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Education</Text>
        <Divider />
        <View style={styles.section}>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.subtitle}>Master's, Masaryk University</Text>
              <Text style={styles.date}>May 2021</Text>
            </View>
            <Text>Service science, management and engineering</Text>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.subtitle}>Bachelor's, College of Polytechnics Jihlava</Text>
              <Text style={styles.date}>June 2017</Text>
            </View>
            <Text>Computer science</Text>
          </View>
        </View>
        <Text style={styles.title}>Certificates</Text>
        <Divider />
        <View style={styles.section}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text>Certified Scrum Master, Scrum Alliance</Text>
            <Text style={styles.date}>March 2020</Text>
          </View>
        </View>
        <Text style={styles.title}>Other</Text>
        <Divider />
        <Text style={styles.section}>Youth mentor, Young Life, Brno</Text>
      </View>
    </Page>
  </Document>
);
