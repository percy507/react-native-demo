import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ExpandableSection } from 'react-native-ui-lib';

import { IconFont, ScreenWrapper, Text, View } from '@/components';

import ButtonDemo from './Button';
import DividerDemo from './Divider';
import IconFontDemo from './IconFont';
import ImageDemo from './Image';
import ModalDemo from './Modal';
import TextDemo from './Text';
import ViewDemo from './View';

const list = [
  { title: 'Text', demo: TextDemo },
  { title: 'View', demo: ViewDemo },
  { title: 'Image', demo: ImageDemo },
  { title: 'Button', demo: ButtonDemo },
  { title: 'Modal', demo: ModalDemo },
  { title: 'IconFont', demo: IconFontDemo },
  { title: 'Divider', demo: DividerDemo },
];

function Item({ data }) {
  const [expanded, setExpanded] = useState(false);
  const Demo = data.demo;
  return (
    <View style={styles.item}>
      <ExpandableSection
        expanded={expanded}
        onPress={() => setExpanded((v) => !v)}
        sectionHeader={
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{data.title}</Text>
            <IconFont
              style={
                expanded
                  ? { transform: [{ rotateZ: '90deg' }] }
                  : { transform: [{ rotateZ: '-90deg' }] }
              }
              color="#444"
              name="icon-back-arrow"
            />
          </View>
        }>
        <Demo />
      </ExpandableSection>
    </View>
  );
}

export function DemoTestComponentsScreen() {
  return (
    <ScreenWrapper
      contentStyle={styles.root}
      contentIsScrollView={false}
      navbar={{ title: '使用 Toast' }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={list}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {},
  item: { borderBottomWidth: 1, borderColor: '#fff' },
  itemHeader: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  itemArrow: {},
});
