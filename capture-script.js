import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

/**
 * Script de Captura Automática para Portafolio "Userlg Standard"
 * 
 * Genera capturas de alta resolución en múltiples viewports.
 */

const CAPTURE_DIR = path.resolve('captures');
const APP_URL = process.env.APP_URL || 'http://localhost:5173'; // Vite por defecto

if (!fs.existsSync(CAPTURE_DIR)) {
    fs.mkdirSync(CAPTURE_DIR, { recursive: true });
}

const capture = async () => {
    console.log('🚀 Iniciando sesión de fotos premium...');

    // Windows Fix para Puppeteer en entornos de agentes
    if (process.platform === 'win32') {
        process.env.HOME = process.env.USERPROFILE;
    }

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();
        
        // Configurar navegación
        await page.goto(APP_URL, { waitUntil: 'networkidle0', timeout: 30000 });
        console.log(`📸 Capturando Home en ${APP_URL}`);

        // Viewports estándar
        const viewports = [
            { width: 1920, height: 1080, name: 'desktop-4k-emulated' },
            { width: 1440, height: 900, name: 'macbook-pro' },
            { width: 375, height: 812, name: 'iphone-x', isMobile: true },
            { width: 768, height: 1024, name: 'ipad-air' },
        ];

        for (const vp of viewports) {
            await page.setViewport(vp);
            await page.screenshot({
                path: path.join(CAPTURE_DIR, `home-${vp.name}.png`),
                fullPage: true,
            });
            console.log(`✅ Guardado: home-${vp.name}.png`);
        }

        // Simulación de navegación a rutas críticas si es posible
        const routes = ['/dashboard', '/login', '/settings', '/profile'];
        for (const route of routes) {
            try {
                await page.goto(`${APP_URL}${route}`, { waitUntil: 'networkidle2', timeout: 5000 });
                await page.screenshot({
                    path: path.join(CAPTURE_DIR, `${route.replace('/', '')}-desktop.png`),
                    fullPage: false,
                });
                console.log(`✅ Guardado: ${route}-desktop.png`);
            } catch (err) {
                console.log(`⚠️  Ruta ${route} no disponible, saltando...`);
            }
        }

    } catch (error) {
        console.error('❌ Error durante la captura:', error.message);
    } finally {
        await browser.close();
        console.log(`\n🎉 Proceso finalizado. Las imágenes están en: ${CAPTURE_DIR}`);
    }
};

capture();
