'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export type QueryPaginationType = {
  page?: string;
  per_page?: string;
};

export type QueryCalculatorType = {
  tobacco_price?: string;
  tobacco_weight?: string;
  second_tobacco_price?: string;
  second_tobacco_weight?: string;
  bowl_capacity?: string;
  percentage_first?: string;
  percentage_second?: string;
  coal_pieces?: string;
  coals_price?: string;
  coals_consumption?: string;
  hookah_price?: string;
  salary_per_one_hookah?: string;
  additional_expenses?: string;
};

export type QueryType = QueryPaginationType & QueryCalculatorType;

export default function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query: QueryType = {};

  let tobacco_price = searchParams.get('tobacco_price');
  let tobacco_weight = searchParams.get('tobacco_weight');
  let second_tobacco_price = searchParams.get('second_tobacco_price');
  let second_tobacco_weight = searchParams.get('second_tobacco_weight');
  let bowl_capacity = searchParams.get('bowl_capacity');
  let percentage_first = searchParams.get('percentage_first');
  let percentage_second = searchParams.get('percentage_second');
  let coal_pieces = searchParams.get('coal_pieces');
  let coals_price = searchParams.get('coals_price');
  let coals_consumption = searchParams.get('coals_consumption');
  let hookah_price = searchParams.get('hookah_price');
  let salary_per_one_hookah = searchParams.get('salary_per_one_hookah');
  let additional_expenses = searchParams.get('additional_expenses');

  if (tobacco_price) query.tobacco_price = tobacco_price;
  if (tobacco_weight) query.tobacco_weight = tobacco_weight;
  if (second_tobacco_price) query.second_tobacco_price = second_tobacco_price;
  if (second_tobacco_weight) query.second_tobacco_weight = second_tobacco_weight;
  if (bowl_capacity) query.bowl_capacity = bowl_capacity;
  if (percentage_first) query.percentage_first = percentage_first;
  if (percentage_second) query.percentage_second = percentage_second;
  if (coal_pieces) query.coal_pieces = coal_pieces;
  if (coals_price) query.coals_price = coals_price;
  if (coals_consumption) query.coals_consumption = coals_consumption;
  if (hookah_price) query.hookah_price = hookah_price;
  if (salary_per_one_hookah) query.salary_per_one_hookah = salary_per_one_hookah;
  if (additional_expenses) query.additional_expenses = additional_expenses;

  const pushQuery = ({
    tobacco_price,
    tobacco_weight,
    second_tobacco_price,
    second_tobacco_weight,
    bowl_capacity,
    percentage_first,
    percentage_second,
    coal_pieces,
    coals_price,
    coals_consumption,
    hookah_price,
    salary_per_one_hookah,
    additional_expenses,

    page,
    per_page,
  }: QueryType) => {
    
    if (tobacco_price !== undefined) {
      tobacco_price === '' ? delete query.tobacco_price : (query.tobacco_price = tobacco_price);
    }

    if (tobacco_weight !== undefined) {
      tobacco_weight === '' ? delete query.tobacco_weight : (query.tobacco_weight = tobacco_weight);
    }

    if (second_tobacco_price !== undefined) {
      second_tobacco_price === ''
        ? delete query.second_tobacco_price
        : (query.second_tobacco_price = second_tobacco_price);
    }

    if (second_tobacco_weight !== undefined) {
      second_tobacco_weight === ''
        ? delete query.second_tobacco_weight
        : (query.second_tobacco_weight = second_tobacco_weight);
    }

    if (bowl_capacity !== undefined) {
      bowl_capacity === '' ? delete query.bowl_capacity : (query.bowl_capacity = bowl_capacity);
    }

    if (percentage_first !== undefined) {
      percentage_first === ''
        ? delete query.percentage_first
        : (query.percentage_first = percentage_first);
    }

    if (percentage_second !== undefined) {
      percentage_second === ''
        ? delete query.percentage_second
        : (query.percentage_second = percentage_second);
    }

    if (coal_pieces !== undefined) {
      coal_pieces === '' ? delete query.coal_pieces : (query.coal_pieces = coal_pieces);
    }

    if (coals_price !== undefined) {
      coals_price === '' ? delete query.coals_price : (query.coals_price = coals_price);
    }

    if (coals_consumption !== undefined) {
      coals_consumption === ''
        ? delete query.coals_consumption
        : (query.coals_consumption = coals_consumption);
    }

    if (hookah_price !== undefined) {
      hookah_price === '' ? delete query.hookah_price : (query.hookah_price = hookah_price);
    }

    if (salary_per_one_hookah !== undefined) {
      salary_per_one_hookah === ''
        ? delete query.salary_per_one_hookah
        : (query.salary_per_one_hookah = salary_per_one_hookah);
    }

    if (additional_expenses !== undefined) {
      additional_expenses === ''
        ? delete query.additional_expenses
        : (query.additional_expenses = additional_expenses);
    }
    // *  Pagination
    if (page !== undefined) {
      page === '' ? delete query.page : (query.page = page);
    }

    if (per_page !== undefined) {
      per_page === '' ? delete query.per_page : (query.per_page = per_page);
    }

    const newQuery = new URLSearchParams(query).toString();

    router.push(`?${newQuery}`, { scroll: false });
  };

  const clearQuery = () => {
    router.push('/calculator', { scroll: true });
  };

  return { pushQuery, clearQuery, query };
}
