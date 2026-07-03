const propertyImages = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80",
];

export const getPropertyImage = (id) => {
  return propertyImages[id % propertyImages.length];
};

export const getPropertyGallery = (id) => {
  return [
    propertyImages[id % propertyImages.length],
    propertyImages[(id + 1) % propertyImages.length],
    propertyImages[(id + 2) % propertyImages.length],
  ];
};