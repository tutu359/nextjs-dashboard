import DashboardSkeleton from '@/app/ui/skeletons';

// 流式传输的三种方式：1.整个页面 2.单个组件 3.一组组件
// You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
// You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
// You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.
export default function Loading() {
  return <DashboardSkeleton />;
}