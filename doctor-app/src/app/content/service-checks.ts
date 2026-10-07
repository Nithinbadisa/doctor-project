export interface ServiceCheck {
  slug: string;
  title: string;
  questions: readonly string[];
}

export const serviceChecks: Record<string, ServiceCheck> = {
  anxiety: {
    slug: 'anxiety',
    title: 'Anxiety & Stress',
    questions: [
      'How often has worry felt difficult to control?',
      'How often have you felt tense, restless, or on edge?',
      'How often have physical feelings like a racing heart or tightness bothered you?',
      'How often have you avoided something because it felt worrying?',
      'How often has worry made it hard to concentrate?',
      'How often have worries made it difficult to relax or sleep?',
      'How often have you needed repeated reassurance to feel settled?',
      'How often has uncertainty felt especially difficult to manage?',
      'How often have you noticed muscle tension or irritability?',
      'How often have these experiences affected your usual activities?'
    ]
  },
  depression: {
    slug: 'depression',
    title: 'Depression & Low Mood',
    questions: [
      'How often have you felt low, sad, or emotionally flat?',
      'How often have you had less interest in things you usually enjoy?',
      'How often has your energy felt lower than usual?',
      'How often have changes in sleep affected your day?',
      'How often have changes in appetite or eating felt noticeable?',
      'How often has it been difficult to concentrate or make decisions?',
      'How often have you been hard on yourself or felt like a burden?',
      'How often have you found yourself withdrawing from people?',
      'How often have everyday tasks felt unusually difficult to begin or finish?',
      'How often has it felt difficult to imagine things getting better?'
    ]
  },
  sleep: {
    slug: 'sleep',
    title: 'Sleep Problems',
    questions: [
      'How often have you had difficulty falling asleep?',
      'How often have you woken during the night and struggled to return to sleep?',
      'How often have you woken earlier than you wanted?',
      'How often have you woken feeling unrested?',
      'How often has your sleep timing shifted or felt irregular?',
      'How often has tiredness made daytime tasks harder?',
      'How often have you worried about whether you will sleep?',
      'How often have you found it difficult to wind down before bed?',
      'How often have you felt sleepy when you wanted to be alert?',
      'How often have sleep difficulties affected your mood or concentration?'
    ]
  },
  stress: {
    slug: 'stress',
    title: 'Stress & Burnout',
    questions: [
      'How often have your responsibilities felt like more than you can manage?',
      'How often have you felt tired even after taking time to rest?',
      'How often has it been difficult to switch off from work or daily demands?',
      'How often have you felt detached from tasks that usually matter to you?',
      'How often have you felt more irritable or impatient than usual?',
      'How often has pressure made it difficult to focus on one task?',
      'How often have you felt you had little control over your day?',
      'How often have you put off basic needs like meals, breaks, or sleep?',
      'How often have you felt guilty when taking time to recover?',
      'How often has pressure affected your relationships or time outside work?'
    ]
  },
  relationships: {
    slug: 'relationships',
    title: 'Relationship & Family Support',
    questions: [
      'How often have conversations with someone close felt difficult?',
      'How often have you felt unheard or misunderstood?',
      'How often have disagreements returned to the same unresolved issue?',
      'How often have you avoided a conversation you felt needed to happen?',
      'How often have trust concerns affected your connection?',
      'How often have changes in family or relationship roles felt hard to navigate?',
      'How often have you found it difficult to express what you need?',
      'How often have boundaries been unclear or difficult to maintain?',
      'How often has relationship tension affected your routines or wellbeing?',
      'How often have you wished for help having a calmer conversation?'
    ]
  },
  general: {
    slug: 'general',
    title: 'General Consultation',
    questions: [
      'How often have you felt that something in your wellbeing has changed?',
      'How often have your thoughts or feelings been difficult to make sense of?',
      'How often have changes in mood affected your day?',
      'How often have sleep or energy changes affected your routine?',
      'How often have everyday responsibilities felt harder than usual?',
      'How often have several concerns felt connected or overlapping?',
      'How often have you felt unsure about what kind of support might help?',
      'How often have you wanted someone to talk things through with?',
      'How often have these concerns affected time with people or activities you value?',
      'How often have you wanted help choosing one manageable next step?'
    ]
  }
};