import React from 'react';
import { SectionList } from 'react-native';

import { contactsData } from './contactsData';
import ContactItem from './ContactItem';
import ContactSectionHeader from './ContactSectionHeader';

const ContactList = () => (
  <SectionList
    style={{ marginTop: 22 }}
    renderItem={({ item, index, _section }) => (
      <ContactItem key={item + index} text={item} />
    )}
    renderSectionHeader={({ section: { title } }) => (
      <ContactSectionHeader title={title} />
    )}
    sections={contactsData}
    keyExtractor={(item, index) => item + index}
  />
);

export default ContactList;
