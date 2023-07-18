import React, { useMemo } from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

const SettingBackdrop = ({ animatedIndex, style }) => {
  const backdropAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedIndex.value, [-1, 0], [0, 0.75], Extrapolate.CLAMP)
  }))

  const backdropStyle = useMemo(
    () => [style, { backgroundColor: '#000000' }, backdropAnimatedStyle],
    [style, backdropAnimatedStyle]
  )

  return <Animated.View style={backdropStyle} />
}

export default SettingBackdrop
