export type Severity = 'Low' | 'Med' | 'High';

export interface Issue {
  id: string;
  category: string;
  severity: Severity;
  description: string;
  quote: string;
}

const mockIssuesEn: Issue[] = [
  {
    id: 'en-1',
    category: 'Repetitions',
    severity: 'Med',
    description: 'The word "suddenly" appears multiple times in close proximity.',
    quote: '"Suddenly he turned. Suddenly she gasped. Suddenly the door opened."',
  },
  {
    id: 'en-2',
    category: 'Logic',
    severity: 'High',
    description: 'A character enters a scene they were described as having left earlier.',
    quote: '"Maria walked in" — but Maria left two paragraphs above.',
  },
  {
    id: 'en-3',
    category: 'Characters',
    severity: 'Low',
    description: "A character's name appears to change mid-scene.",
    quote: '"Tom smiled at her" → "Tim nodded and left."',
  },
  {
    id: 'en-4',
    category: 'Repetitions',
    severity: 'Low',
    description: 'The phrase "for a moment" appears three times in close proximity.',
    quote: '"For a moment he paused... for a moment she considered..."',
  },
  {
    id: 'en-5',
    category: 'Dialogue',
    severity: 'Med',
    description:
      "Long unbroken dialogue with no action beats makes it hard to track who's speaking.",
    quote: 'Five consecutive dialogue lines with no attribution or action.',
  },
  {
    id: 'en-6',
    category: 'Logic',
    severity: 'Med',
    description: 'Timeline inconsistency: the scene is set at night but the sun rises two sentences later.',
    quote: '"The stars shone overhead... the morning sun blazed through the window."',
  },
  {
    id: 'en-7',
    category: 'Style',
    severity: 'Low',
    description: 'Several passive constructions in a row reduce narrative energy.',
    quote: '"It was done. The door was closed. The letter was sent. The wait began."',
  },
  {
    id: 'en-8',
    category: 'Characters',
    severity: 'Med',
    description: 'A character acts out of line with their established personality without explanation.',
    quote: 'The shy librarian suddenly shouts at a stranger with no buildup.',
  },
];

const mockIssuesRu: Issue[] = [
  {
    id: 'ru-1',
    category: 'Повторы',
    severity: 'Med',
    description: 'Слово «вдруг» встречается несколько раз подряд в близком контексте.',
    quote: '«Вдруг он обернулся. Вдруг она охнула. Вдруг дверь открылась.»',
  },
  {
    id: 'ru-2',
    category: 'Логика',
    severity: 'High',
    description: 'Персонаж входит в сцену, хотя раньше было описано, что он ушёл.',
    quote: '«Мария вошла» — но Мария ушла двумя абзацами выше.',
  },
  {
    id: 'ru-3',
    category: 'Персонажи',
    severity: 'Low',
    description: 'Имя персонажа меняется в середине сцены.',
    quote: '«Том улыбнулся ей» → «Тим кивнул и вышел.»',
  },
  {
    id: 'ru-4',
    category: 'Повторы',
    severity: 'Low',
    description: 'Оборот «на мгновение» встречается три раза подряд.',
    quote: '«На мгновение он остановился... на мгновение она задумалась...»',
  },
  {
    id: 'ru-5',
    category: 'Диалог',
    severity: 'Med',
    description: 'Длинный непрерывный диалог без авторских ремарок затрудняет понимание.',
    quote: 'Пять реплик подряд без указания говорящего и без действий.',
  },
  {
    id: 'ru-6',
    category: 'Логика',
    severity: 'Med',
    description: 'Несоответствие времени суток: описывается ночь, но через два предложения встаёт солнце.',
    quote: '«Звёзды сияли над головой... утреннее солнце залило комнату.»',
  },
  {
    id: 'ru-7',
    category: 'Стиль',
    severity: 'Low',
    description: 'Несколько пассивных конструкций подряд снижают динамику повествования.',
    quote: '«Это было сделано. Дверь была закрыта. Письмо отправлено. Ожидание началось.»',
  },
  {
    id: 'ru-8',
    category: 'Персонажи',
    severity: 'Med',
    description: 'Персонаж ведёт себя вопреки своему образу без объяснения.',
    quote: 'Застенчивая библиотекарша внезапно кричит на незнакомца без предпосылок.',
  },
];

const longTextIssueEn: Issue = {
  id: 'en-long',
  category: 'Structure',
  severity: 'High',
  description:
    'The text is long enough to reveal structural issues — the third act seems to drag without clear narrative purpose.',
  quote: 'Multiple scenes extend beyond their natural end point.',
};

const longTextIssueRu: Issue = {
  id: 'ru-long',
  category: 'Структура',
  severity: 'High',
  description:
    'Текст достаточно длинный, чтобы выявить структурные проблемы — третий акт затягивается без явной нарративной цели.',
  quote: 'Несколько сцен продолжаются за пределами своей естественной точки завершения.',
};

/**
 * Returns a set of mock issues based on locale and text length.
 * No API calls are made — all results are pre-defined.
 *
 * - < 200 chars  → []
 * - 200–699      → 4 issues
 * - 700–1199     → 5 issues
 * - 1200–1699    → 6 issues
 * - 1700–2199    → 7 issues
 * - > 2000       → up to 7 base issues + 1 structure issue = 8 max
 */
export function getMockIssues(locale: string, textLength: number): Issue[] {
  if (textLength < 200) return [];

  const base = locale === 'ru' ? mockIssuesRu : mockIssuesEn;
  const longIssue = locale === 'ru' ? longTextIssueRu : longTextIssueEn;

  const count = Math.min(7, 4 + Math.floor((textLength - 200) / 500));
  const issues = base.slice(0, count);

  if (textLength > 2000) {
    return [...issues, longIssue];
  }

  return issues;
}
