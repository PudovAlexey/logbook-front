import { DimensionValue, FlexAlignType, StyleSheet } from 'react-native';

type VStackProps = {
    style?: Record<string, string | number>
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: FlexAlignType
    direction?: 'column' | 'reverse'
    gap?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 64
    wrap?: boolean
    flex?: number
    alignSelf?: FlexAlignType
    height?: DimensionValue,
    width?: DimensionValue
}

const styles = ({
 justifyContent = 'flex-start',
 alignItems = 'center',
 direction = 'column', gap,
 wrap, flex,
 alignSelf = 'stretch',
 width = 'auto',
 height = 'auto',
}: VStackProps) => StyleSheet.create({
    style: {
     display: 'flex',
     justifyContent,
     alignItems,
     flexDirection: direction === 'column' ? 'column' : 'column-reverse',
     rowGap: gap,
     flex,
     alignSelf,
     width,
     height,
     flexWrap: wrap ? 'wrap' : 'nowrap',
    },

});

export {
    styles,
};

export type {
    VStackProps,
};
