function format(tag: string, args: unknown[]) {
  return [`%c[${tag}]`, "color:#6366f1;font-weight:600", ...args];
}

const logger = {
  log(tag: string, ...args: unknown[]) {
    if (!import.meta.env.DEV) return;
    console.log(...format(tag, args));
  },

  info(tag: string, ...args: unknown[]) {
    if (!import.meta.env.DEV) return;
    console.info(...format(tag, args));
  },

  warn(tag: string, ...args: unknown[]) {
    if (!import.meta.env.DEV) return;
    console.warn(...format(tag, args));
  },

  error(tag: string, ...args: unknown[]) {
    if (!import.meta.env.DEV) return;
    console.error(...format(tag, args));
  },
};

export default logger;
