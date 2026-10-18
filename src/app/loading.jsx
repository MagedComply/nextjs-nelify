export default function Loading() {
  return (
    <div className="w-100 mx-auto h-80 bg-gray-700 rounded-md shadow p-3">
      <div className="h-4 bg-gray-300 mb-7  animate-pulse"></div>
      <div className="h-14 w-3/12 bg-gray-300 mb-7 animate-pulse "></div>
      <div className="h-14 w-4/12 bg-gray-300 mb-7  animate-pulse"></div>

      <div className="flex gap-4">
        <div className="h-4 w-3/12 bg-gray-300 mb-7  animate-pulse"></div>
        <div className="h-4 w-4/12 bg-gray-300 mb-7  animate-pulse"></div>
        <div className="h-4 w-4/12 bg-gray-300 mb-7  animate-pulse"></div>
      </div>
    </div>
  );
}
