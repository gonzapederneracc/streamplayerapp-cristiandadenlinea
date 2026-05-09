# Stream Player Proxy

Página estática para cargar el embed de YouTube desde un origen HTTPS propio:

```text
https://streamplayerapp.cristiandad.com.ar
```

La app obtiene el `videoId` dinámico desde Church Online Platform y abre esta página así:

```text
https://streamplayerapp.cristiandad.com.ar/?videoId=VIDEO_ID
```

## Archivos

- `index.html`: shell del reproductor.
- `player.js`: valida `videoId` y crea el iframe de YouTube.
- `styles.css`: layout fullscreen.
- `404.html`: fallback para rutas inválidas.
- `CNAME`: dominio custom de GitHub Pages.

## Seguridad simple

`player.js` solo acepta IDs de YouTube con letras, números, guion y guion bajo. No renderiza HTML recibido por URL.
