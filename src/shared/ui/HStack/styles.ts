import { DimensionValue, FlexAlignType, StyleSheet } from 'react-native';

type HStackProps = {
    style?: Record<string, string | number>
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: FlexAlignType
    direction?: 'row' | 'reverse'
    gap?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 64
    width?: DimensionValue
    wrap?: boolean
    height?: DimensionValue
}

const styles = ({
 justifyContent, alignItems = 'center', direction = 'row', gap, width = '100%', wrap, height = '100%',
}: HStackProps) => StyleSheet.create({
    style: {
     display: 'flex',
     justifyContent,
     alignItems,
     flexDirection: direction === 'row' ? 'row' : 'row-reverse',
     gap,
     width,
     height,
     flex: 1,
     flexWrap: wrap ? 'wrap' : 'nowrap',
    },

});

export {
    styles,
};

export type {
    HStackProps,
};
