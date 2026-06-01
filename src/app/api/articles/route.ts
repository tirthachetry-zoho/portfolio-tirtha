import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: articles } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(3)

    return NextResponse.json(articles || [])
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}
