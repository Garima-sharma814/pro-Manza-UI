import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"))
const name = 'Garima'

root.render(<h1>Hello World {name} </h1>)
