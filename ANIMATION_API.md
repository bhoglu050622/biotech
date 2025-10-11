# Hero Background Animation API

## Overview
The hero background animation system provides a sophisticated, layered neural environment with interactive controls and performance optimization.

## API Reference

### Global API
The animation system exposes a global API accessible via `window.heroAnimation`:

```javascript
// Set waveform mode
window.heroAnimation.setMode('calm')    // calm, focus, stress
window.heroAnimation.setMode('focus')
window.heroAnimation.setMode('stress')

// Control playback
window.heroAnimation.pause()
window.heroAnimation.resume()
window.heroAnimation.toggle()
```

### Waveform Modes
- **calm**: Low frequency (1.2 Hz), soft amplitude (0.8), teal color
- **focus**: Medium frequency (3.2 Hz), moderate amplitude (1.2), cyan color  
- **stress**: High frequency (5.8 Hz), high amplitude (1.5), violet color

## Performance Features

### Automatic Optimization
- **Particle Count**: Desktop (120), Tablet (45), Mobile (20)
- **Frame Rate Capping**: Automatically reduces to 30fps on low-power devices
- **Lazy Loading**: Heavy animation loads after LCP (2s delay)
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

### Performance Monitoring
Press `Ctrl+Shift+P` to toggle the performance monitor showing:
- Real-time FPS
- Frame time (ms)
- Low power mode detection

## Accessibility

### Reduced Motion Support
When `prefers-reduced-motion: reduce` is detected:
- All animations disabled
- Static gradient fallback shown
- Waveform becomes simple static SVG

### Controls
- **Mode Selector**: Bottom-left corner with Calm/Focus/Stress buttons
- **Pause Toggle**: Bottom-left corner pause/resume button
- **State Persistence**: Pause state saved to localStorage

## Technical Implementation

### Layers (Render Order)
1. **Gradient Sky**: Slow-moving multi-stop gradient (20s loop)
2. **Volumetric Glow**: Pulsing radial blur (8s loop, ±5% scale)
3. **Particle Field**: WebGL-accelerated particles with Perlin noise
4. **Connection Arcs**: Animated neural paths (900-1600ms duration)
5. **Waveform Ribbon**: Morphing SVG path with glow effects
6. **Device Halo**: Subtle bloom behind device mockup
7. **Interaction Overlay**: Mouse parallax and pointer effects

### Performance Budget
- **Target FPS**: 60fps (30fps on mobile)
- **Frame Budget**: 20-30ms CPU per frame
- **Bundle Size**: <150KB gzipped for animation code
- **Memory Usage**: Optimized particle pooling

### Browser Support
- **Modern Browsers**: Full WebGL acceleration
- **Fallback**: CSS gradients and simple SVG animations
- **Mobile**: Reduced particle count and simplified effects

## Usage Examples

### Basic Mode Switching
```javascript
// Switch to calm mode
window.heroAnimation.setMode('calm')

// Pause all animations
window.heroAnimation.pause()

// Resume animations
window.heroAnimation.resume()
```

### Event Integration
```javascript
// Respond to user interactions
document.addEventListener('click', () => {
  // Create ripple effect
  window.heroAnimation.setMode('focus')
  setTimeout(() => {
    window.heroAnimation.setMode('calm')
  }, 2000)
})
```

### Performance Monitoring
```javascript
// Check if animations are running smoothly
const monitor = document.querySelector('[data-performance-monitor]')
if (monitor) {
  const fps = monitor.dataset.fps
  if (fps < 30) {
    window.heroAnimation.pause()
  }
}
```

## Troubleshooting

### Common Issues
1. **Low FPS**: Animation automatically pauses on low-power devices
2. **Memory Leaks**: Particles are properly cleaned up on unmount
3. **Mobile Performance**: Particle count automatically reduced
4. **Accessibility**: Reduced motion setting properly respected

### Debug Mode
Enable debug mode by adding `?debug=animation` to the URL to see:
- Particle count
- Connection count
- Frame timing
- Memory usage

## Future Enhancements
- WebGL shader optimization
- Web Workers for particle calculations
- Three.js integration for 3D effects
- Lottie integration for complex animations
