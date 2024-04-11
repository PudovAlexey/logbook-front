import { DimensionValue, FlexAlignType, StyleSheet } from 'react-native';

type VStackProps = {
    style?: Record<string, string | number>
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: FlexAlignType
    direction?: 'column' | 'reverse'
    gap?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 64
    width?: DimensionValue
    wrap?: boolean
}

const styles = ({
 justifyContent, alignItems = 'center', direction = 'column', gap, width = '100%', wrap,
}: VStackProps) => StyleSheet.create({
    style: {
     display: 'flex',
     justifyContent,
     alignItems,
     flexDirection: direction === 'column' ? 'column' : 'column-reverse',
     gap,
     width,
     flexWrap: wrap ? 'wrap' : 'nowrap',
    },

});

export {
    styles,
};

export type {
    VStackProps,
};
