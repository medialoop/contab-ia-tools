import * as HeroIcons from '@heroicons/react/24/outline';

export default function ResourceCard({ resource, type, onClick }) {
  const IconComponent = HeroIcons[resource.icon] || HeroIcons.DocumentTextIcon;
  const isDownload = type === 'download';

  return (
    <button
      onClick={() => onClick(resource)}
      className="w-full text-left p-6 rounded-lg border-2 border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg transition-all duration-200 group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 rounded-lg bg-primary-100 group-hover:bg-primary-600 transition-colors duration-200">
          <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-200" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
              {resource.name}
            </h3>
            <span className="flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              {resource.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {resource.description}
          </p>
          {isDownload && (
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 font-medium">
                {resource.fileType}
              </span>
              <span>{resource.fileSize}</span>
            </div>
          )}
          {!isDownload && resource.externalUrl && (
            <div className="flex items-center gap-2 text-xs text-primary-600 group-hover:text-primary-700">
              <HeroIcons.ArrowTopRightOnSquareIcon className="w-4 h-4" />
              <span className="font-medium">Acessar site</span>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
