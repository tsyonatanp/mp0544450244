// Design system constants for consistent styling across all pages

export const TYPOGRAPHY = {
    // Hero titles (H1)
    heroTitle: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent",

    // Section titles (H2)
    sectionTitle: "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
    sectionTitleWhite: "text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent",

    // Subsection titles (H3)
    subsectionTitle: "text-2xl md:text-3xl font-bold text-gray-900 mb-4",

    // Card titles
    cardTitle: "text-xl font-bold text-gray-900 mb-3",

    // Body text
    heroSubtitle: "text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed",
    bodyLarge: "text-lg text-gray-600 leading-relaxed",
    bodyRegular: "text-base text-gray-600 leading-relaxed",
}

export const BUTTONS = {
    // Primary CTA buttons
    primary: "bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2",

    // Secondary buttons
    secondary: "bg-transparent border-2 border-gray-600 hover:border-green-500 hover:text-green-400 text-gray-300 px-10 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/5",

    // WhatsApp button
    whatsapp: "bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2",

    // White button (for dark backgrounds)
    white: "bg-white text-slate-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2",
}

export const SPACING = {
    // Section padding
    sectionPadding: "py-20",
    heroPadding: "pt-32 pb-24",

    // Container
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    containerNarrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
}

export const HERO = {
    background: "relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden",
    backgroundPattern: "absolute inset-0 opacity-10",
    backgroundOverlay: "absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900",
}
