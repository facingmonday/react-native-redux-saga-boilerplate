import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  NAVIGATE,
} from '../constants/app';

export function openDrawer() {
  return {
    type: OPEN_DRAWER,
  };
}
export function closeDrawer() {
  return {
    type: CLOSE_DRAWER,
  };
}
export function navigate(page) {
  return {
    type: NAVIGATE,
    page,
  }
}