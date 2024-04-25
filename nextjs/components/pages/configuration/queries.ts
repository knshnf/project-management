import { gql } from '@apollo/client'

// export { useGetOrderQuery } from './queries.types'
export const GET_ORDER = gql`
  query GetOrder($id: String!) {
    orders_all_time_by_pk(id: $id) {
      program_id
      protocol_id
      id
      to_site
      order_status
      from_country
      dest_country_code
      to_protocol_site {
        location {
          city
          country_code
          latitude
          longitude
        }
      }
      ship_date
      received_date
      request_date
      pack_date
      delivered_date
      tracking_number
      tracking_url
      quantity
      du_description
      eta_date
      num_shippers
      vendor
      carrier_name
      issues
      order_kits {
        awb
        kit_id
        quantity
      }
      estimated_dates {
        est_pack_date
        est_ship_date
        est_del_date
        est_rec_date
      }
    }
  }
`