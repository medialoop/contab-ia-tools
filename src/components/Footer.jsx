export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Assistente Contábil. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Powered by</span>
            <a
              href="https://pracontador.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors duration-200"
            >
              pracontador.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
