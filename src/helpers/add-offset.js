export function addOffset(map) {
    const offsetY = map.getSize().y * 0.15;
    console.log('111');
    map.panBy([0, offsetY], {animate: false})
}