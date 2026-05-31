import fs from 'fs';
import path from 'path';

const pages = [
  'paths', 'paths/[slug]', 'lessons', 'lessons/[slug]',
  'simulator', 'projects', 'projects/[slug]', 'code-lab',
  'components', 'components/[slug]', 'mentor', 'challenges',
  'challenges/[slug]', 'dashboard', 'admin-preview', 'ecosystem', 'about'
];

const basePath = path.join(process.cwd(), 'src', 'app');

pages.forEach(pagePath => {
  const fullPath = path.join(basePath, pagePath);
  fs.mkdirSync(fullPath, { recursive: true });
  
  const isDynamic = pagePath.includes('[slug]');
  const pageName = pagePath.split('/')[0];
  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  
  const content = `
export default function ${title}Page(${isDynamic ? '{ params }: { params: { slug: string } }' : ''}) {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto">
      <h1 className="font-headline-xl text-primary mb-6">${title} ${isDynamic ? '{params.slug}' : 'Page'}</h1>
      <p className="font-body-lg text-on-surface-variant">
        This is the ${title} page. Content is under construction but fully functional.
      </p>
      <div className="mt-8 glass-panel p-8 rounded-xl">
        <p>Interactive components go here.</p>
      </div>
    </div>
  );
}
  `;
  
  fs.writeFileSync(path.join(fullPath, 'page.tsx'), content.trim());
});

console.log('Pages created successfully.');
